import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService.js';
import type { AuthCredentials, RegisterData } from '../types/index.js';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const registerData: RegisterData = req.body;

      if (!registerData.email || !registerData.password || !registerData.fullName || !registerData.studentId) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields',
        });
      }

      const result = await AuthService.signUp(registerData);

      if (result.error) {
        return res.status(400).json({
          success: false,
          error: result.error,
        });
      }

      return res.status(201).json({
        success: true,
        data: result.data,
        message: 'User registered successfully',
      });
    } catch (error) {
      console.error('Register error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const credentials: AuthCredentials = req.body;

      if (!credentials.email || !credentials.password) {
        return res.status(400).json({
          success: false,
          error: 'Email and password are required',
        });
      }

      const result = await AuthService.signIn(credentials);

      if (result.error) {
        return res.status(401).json({
          success: false,
          error: result.error,
        });
      }

      return res.status(200).json({
        success: true,
        data: result.data,
        message: 'Login successful',
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  static async logout(req: Request, res: Response) {
    try {
      const result = await AuthService.signOut();

      if (result.error) {
        return res.status(400).json({
          success: false,
          error: result.error,
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Logout successful',
      });
    } catch (error) {
      console.error('Logout error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  static async getCurrentUser(req: Request, res: Response) {
    try {
      const user = await AuthService.getCurrentUser();

      if (!user) {
        return res.status(401).json({
          success: false,
          error: 'Not authenticated',
        });
      }

      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      console.error('Get current user error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
}
