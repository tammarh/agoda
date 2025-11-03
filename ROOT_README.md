# אגודת הסטודנטים - Student Union Website

## 🎯 סקירה / Overview

פרויקט Full-Stack מקצועי לאתר אגודת סטודנטים עם הפרדה מלאה בין Backend ו-Frontend.

## 📁 מבנה הפרויקט / Project Structure

```
project-root/
├── backend/                    # שרת API (Express + TypeScript)
│   ├── src/
│   │   ├── controllers/       # REST API Controllers  
│   │   ├── routes/            # API Routes
│   │   ├── services/          # Business Logic
│   │   ├── repositories/      # Data Access Layer
│   │   ├── middleware/        # Express Middleware
│   │   ├── types/            # TypeScript Types
│   │   ├── utils/            # Utilities
│   │   └── server.ts         # Entry Point
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
├── frontend/                  # React Application
│   ├── src/
│   │   ├── components/       # React Components
│   │   ├── pages/           # Page Components
│   │   ├── contexts/        # React Contexts
│   │   ├── hooks/           # Custom Hooks
│   │   ├── utils/           # Utilities & API Client
│   │   ├── lib/             # Libraries (Supabase)
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── .env
│
└── README.md
```

## 🚀 התקנה והרצה / Installation & Running

### Backend

```bash
cd backend
npm install
npm run dev        # Development mode
npm run build      # Production build  
npm start          # Run production
```

Backend יעלה על: `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm run dev        # Development mode
npm run build      # Production build
npm run preview    # Preview production build
```

Frontend יעלה על: `http://localhost:5173`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - הרשמת משתמש חדש
- `POST /api/auth/login` - התחברות
- `POST /api/auth/logout` - יציאה
- `GET /api/auth/me` - קבלת פרטי משתמש מחובר

### Content
- `GET /api/content/departments` - קבלת מחלקות
- `GET /api/content/news?limit=3` - קבלת חדשות
- `GET /api/content/gallery` - קבלת תמונות גלריה
- `GET /api/content/products?inStock=true` - קבלת מוצרים
- `GET /api/content/rights` - קבלת זכויות סטודנטים

### Health Check
- `GET /api/health` - בדיקת תקינות השרת

## 🏗️ ארכיטקטורה / Architecture

### Backend Architecture

```
Request → Route → Controller → Service → Repository → Database
```

- **Routes**: הגדרת endpoints
- **Controllers**: טיפול בבקשות ותגובות HTTP
- **Services**: לוגיקה עסקית
- **Repositories**: גישה לדאטאבייס
- **Middleware**: אימות והרשאות

### Frontend Architecture

```
Component → Hook → API Client → Backend API
```

- **Components**: קומפוננטות React
- **Hooks**: Custom hooks (useAuth, useAccessibility)
- **Contexts**: State management גלובלי
- **API Client**: תקשורת עם Backend

## 🔐 משתני סביבה / Environment Variables

### Backend (.env)
```env
PORT=3001
NODE_ENV=development
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 💾 Database

הפרויקט משתמש ב-Supabase (PostgreSQL) עם:

- **profiles** - פרופילי משתמשים
- **departments** - מחלקות האגודה
- **news_updates** - חדשות ועדכונים
- **gallery_images** - גלריית תמונות
- **store_products** - מוצרי החנות
- **rights_categories** - זכויות סטודנטים

## 🛠️ טכנולוגיות / Technologies

### Backend
- Node.js + Express
- TypeScript
- Supabase Client
- CORS

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase Client
- Lucide React (Icons)

## 📝 דוגמאות שימוש / Usage Examples

### שימוש ב-API Client (Frontend)

```typescript
import { apiClient } from './utils/apiClient';

// GET request
const response = await apiClient.get('/content/departments');
if (response.success) {
  console.log(response.data);
}

// POST request
const response = await apiClient.post('/auth/login', {
  email: 'user@example.com',
  password: 'password123'
});
```

### הוספת Route חדש (Backend)

```typescript
// src/routes/example.routes.ts
import { Router } from 'express';
import { ExampleController } from '../controllers/ExampleController.js';

const router = Router();
router.get('/items', ExampleController.getItems);

export default router;
```

## 🎨 Features

- ✅ אימות משתמשים מלא
- ✅ ניהול תוכן דינמי
- ✅ גלריית תמונות
- ✅ חנות מוצרים
- ✅ נגישות מלאה
- ✅ Responsive Design
- ✅ RTL Support (Hebrew)
- ✅ Type-safe API
- ✅ Error Handling

## 📚 למידע נוסף

- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 👨‍💻 Development

הפרויקט בנוי לפי best practices:
- Clean Architecture
- Separation of Concerns
- Type Safety
- Error Handling
- RESTful API Design
