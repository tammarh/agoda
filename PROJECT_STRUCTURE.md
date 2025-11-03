# מבנה הפרויקט - Project Structure

## סקירה כללית / Overview

הפרויקט מאורגן בארכיטקטורה מודולרית עם הפרדה ברורה בין Frontend ו-Backend.

## מבנה תיקיות / Directory Structure

```
src/
├── backend/                    # שכבת Backend
│   ├── services/              # לוגיקה עסקית
│   │   ├── AuthService.ts     # שירות אימות משתמשים
│   │   └── ContentService.ts  # שירות תוכן
│   │
│   ├── repositories/          # שכבת גישה למידע
│   │   ├── ProfileRepository.ts
│   │   ├── DepartmentRepository.ts
│   │   ├── NewsRepository.ts
│   │   ├── GalleryRepository.ts
│   │   ├── StoreRepository.ts
│   │   └── RightsRepository.ts
│   │
│   ├── types/                 # הגדרות TypeScript
│   │   └── index.ts
│   │
│   └── utils/                 # כלי עזר Backend
│       └── supabase.ts        # חיבור Supabase
│
└── frontend/                  # שכבת Frontend
    ├── components/           # קומפוננטות React
    │   ├── Navigation.tsx
    │   ├── ContactPanel.tsx
    │   ├── AccessibilityPanel.tsx
    │   └── AuthModal.tsx
    │
    ├── pages/               # דפים
    │   ├── HomePage.tsx
    │   ├── AboutPage.tsx
    │   ├── GalleryPage.tsx
    │   ├── StorePage.tsx
    │   └── RightsPage.tsx
    │
    ├── contexts/            # React Contexts
    │   ├── AuthContext.tsx
    │   └── AccessibilityContext.tsx
    │
    ├── hooks/              # Custom Hooks
    └── utils/              # כלי עזר Frontend
```

## שכבת Backend

### Services (שירותים)
מכילים את הלוגיקה העסקית של האפליקציה:

- **AuthService**: ניהול התחברות, הרשמה ויציאה
- **ContentService**: קבלת תוכן מהדאטאבייס

### Repositories (מאגרים)
מנהלים את הגישה ישירות לדאטאבייס:

- כל Repository אחראי על טבלה אחת
- מבצע פעולות CRUD
- מחזיר נתונים מעובדים

### Types (טיפוסים)
הגדרות TypeScript משותפות:

- טיפוסי נתונים
- Interfaces
- טיפוסי Response

## שכבת Frontend

### Components (קומפוננטות)
קומפוננטות React לשימוש חוזר:

- **Navigation**: תפריט ניווט
- **ContactPanel**: פאנל יצירת קשר
- **AccessibilityPanel**: תפריט נגישות
- **AuthModal**: חלון התחברות/הרשמה

### Pages (דפים)
קומפוננטות ברמת דף:

- כל דף מייצג נתיב בודד
- משתמש ב-Services לקבלת נתונים
- מנהל state מקומי

### Contexts (הקשרים)
ניהול State גלובלי:

- **AuthContext**: מצב אימות משתמש
- **AccessibilityContext**: הגדרות נגישות

## זרימת נתונים / Data Flow

```
Frontend Component
      ↓
   Context (if needed)
      ↓
  Backend Service
      ↓
   Repository
      ↓
  Supabase Database
```

## עקרונות עיצוב / Design Principles

1. **Separation of Concerns**: כל שכבה אחראית על תחום אחד
2. **Single Responsibility**: כל קובץ עם אחריות אחת
3. **DRY**: הימנעות מקוד כפול
4. **Type Safety**: שימוש מלא ב-TypeScript
5. **Modularity**: קל להוסיף/להסיר תכונות

## איך להוסיף תכונה חדשה / Adding New Features

### הוספת טבלה חדשה:

1. צור Repository ב-`backend/repositories/`
2. הוסף טיפוס ב-`backend/types/index.ts`
3. הוסף מתודות ב-`backend/services/ContentService.ts`
4. השתמש בשירות בקומפוננטות Frontend

### הוספת דף חדש:

1. צור קומפוננטה ב-`frontend/pages/`
2. הוסף route ב-`App.tsx`
3. הוסף קישור ב-`Navigation.tsx`

## שימוש ב-Services / Using Services

```typescript
import { ContentService } from '../backend/services/ContentService';

// בקומפוננטה
const [data, setData] = useState([]);

useEffect(() => {
  const loadData = async () => {
    const result = await ContentService.getDepartments();
    setData(result);
  };
  loadData();
}, []);
```

## Best Practices

1. **תמיד השתמש ב-Services**: אל תגש ישירות ל-Repositories מה-Frontend
2. **Type Everything**: הגדר טיפוסים לכל הנתונים
3. **Error Handling**: טפל בשגיאות בכל שכבה
4. **Loading States**: הצג מצבי טעינה למשתמש
5. **Async/Await**: השתמש ב-async/await לפעולות אסינכרוניות
