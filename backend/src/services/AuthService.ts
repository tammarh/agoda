import { supabase } from '../utils/supabase.js';
import { ProfileRepository } from '../repositories/ProfileRepository.js';
import type { AuthCredentials, RegisterData, ApiResponse } from '../types/index.js';
import type { User } from '@supabase/supabase-js';

export class AuthService {
  static async signUp(data: RegisterData): Promise<ApiResponse<User>> {
    try {
      const { email, password, fullName, studentId } = data;

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        return { data: null, error: authError.message };
      }

      if (!authData.user) {
        return { data: null, error: 'Failed to create user' };
      }

      const profile = await ProfileRepository.create({
        id: authData.user.id,
        email,
        full_name: fullName,
        student_id: studentId,
      });

      if (!profile) {
        return { data: null, error: 'Failed to create profile' };
      }

      return { data: authData.user, error: null };
    } catch (error) {
      return { data: null, error: 'An unexpected error occurred' };
    }
  }

  static async signIn(credentials: AuthCredentials): Promise<ApiResponse<User>> {
    try {
      const { email, password } = credentials;

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data: data.user, error: null };
    } catch (error) {
      return { data: null, error: 'An unexpected error occurred' };
    }
  }

  static async signOut(): Promise<ApiResponse<null>> {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        return { data: null, error: error.message };
      }

      return { data: null, error: null };
    } catch (error) {
      return { data: null, error: 'An unexpected error occurred' };
    }
  }

  static async getCurrentUser(): Promise<User | null> {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  }
}
