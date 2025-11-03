# אגודת הסטודנטים - Student Union Website

## מבנה הפרויקט / Project Structure

```
src/
├── backend/                 # Backend Layer
│   ├── services/           # Business Logic Services
│   │   ├── AuthService.ts
│   │   └── ContentService.ts
│   ├── repositories/       # Data Access Layer
│   │   ├── ProfileRepository.ts
│   │   ├── DepartmentRepository.ts
│   │   ├── NewsRepository.ts
│   │   ├── GalleryRepository.ts
│   │   ├── StoreRepository.ts
│   │   └── RightsRepository.ts
│   ├── types/             # TypeScript Types & Interfaces
│   │   └── index.ts
│   └── utils/             # Backend Utilities
│       └── supabase.ts
│
├── frontend/              # Frontend Layer
│   ├── components/        # React Components
│   │   ├── Navigation.tsx
│   │   ├── ContactPanel.tsx
│   │   ├── AccessibilityPanel.tsx
│   │   └── AuthModal.tsx
│   ├── pages/            # Page Components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── StorePage.tsx
│   │   └── RightsPage.tsx
│   ├── contexts/         # React Contexts
│   │   ├── AuthContext.tsx
│   │   └── AccessibilityContext.tsx
│   ├── hooks/           # Custom React Hooks
│   └── utils/           # Frontend Utilities
│
├── App.tsx              # Main App Component
├── main.tsx            # Application Entry Point
└── index.css           # Global Styles
```

## תכונות / Features

### Backend
- **Service Layer**: עיבוד לוגיקה עסקית מרכזית
- **Repository Pattern**: הפרדה של גישה למידע
- **Type Safety**: הגדרות TypeScript מלאות
- **Supabase Integration**: אינטגרציה עם Supabase לניהול מידע ואימות

### Frontend
- **Component-Based**: ארכיטקטורת רכיבים מודולרית
- **Context API**: ניהול state גלובלי
- **Responsive Design**: תמיכה מלאה במובייל וטאבלט
- **Accessibility**: תכונות נגישות מלאות

## התקנה / Installation

```bash
npm install
```

## הרצה מקומית / Run Locally

```bash
npm run dev
```

## בנייה / Build

```bash
npm run build
```

## טכנולוגיות / Technologies

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **Build Tool**: Vite
- **Icons**: Lucide React

## משתני סביבה / Environment Variables

הגדר את המשתנים הבאים בקובץ `.env`:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## מבנה Database

### Tables:
- **profiles** - פרופילי משתמשים
- **departments** - מחלקות האגודה
- **news_updates** - חדשות ועדכונים
- **gallery_images** - תמונות גלריה
- **store_products** - מוצרי החנות
- **rights_categories** - קטגוריות זכויות

## שימוש ב-Backend Services

```typescript
import { AuthService } from './backend/services/AuthService';
import { ContentService } from './backend/services/ContentService';

// Authentication
await AuthService.signUp({ email, password, fullName, studentId });
await AuthService.signIn({ email, password });
await AuthService.signOut();

// Content
const departments = await ContentService.getDepartments();
const news = await ContentService.getNews(3);
const images = await ContentService.getGalleryImages();
const products = await ContentService.getStoreProducts();
const rights = await ContentService.getRightsCategories();
```

## עקרונות ארכיטקטורה / Architecture Principles

1. **Separation of Concerns**: הפרדה ברורה בין frontend ו-backend
2. **Single Responsibility**: כל קובץ אחראי על תפקיד אחד בלבד
3. **DRY (Don't Repeat Yourself)**: שימוש חוזר בקוד דרך services ו-repositories
4. **Type Safety**: שימוש מלא ב-TypeScript למניעת שגיאות
5. **Scalability**: קל להוסיף תכונות חדשות ללא שינוי הקוד הקיים
