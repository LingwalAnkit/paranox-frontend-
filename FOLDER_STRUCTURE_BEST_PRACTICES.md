# Folder Structure Best Practices

This document outlines the recommended folder structure and organization principles for this Next.js application.

## Current Structure Overview

```
paranox-frontend/
├── src/
│   ├── app/                    # Next.js 13+ App Router
│   ├── component/              # Reusable components
│   ├── hooks/                  # Custom React hooks
│   ├── middleware/             # Middleware functions
│   ├── models/                 # Data models/schemas
│   ├── redux/                  # State management
│   ├── section/                # Page sections/layouts
│   └── utils/                  # Utility functions
├── public/                     # Static assets
├── constants/                  # Application constants
└── lib/                        # Shared libraries
```

## Recommended Best Practices

### 1. **App Directory Structure (Next.js 13+ App Router)**

```
src/app/
├── (auth)/                     # Route groups for authentication
│   ├── login/
│   ├── signup/
│   └── layout.tsx              # Shared auth layout
├── (dashboard)/                # Route groups for dashboards
│   ├── student-dashboard/
│   ├── teacher-dashboard/
│   └── parent-dashboard/
├── api/                        # API routes
│   ├── auth/
│   ├── users/
│   └── middleware.ts
├── layout.tsx                  # Root layout
├── page.tsx                    # Home page
├── error.tsx                   # Error boundary
├── loading.tsx                 # Loading UI
└── not-found.tsx               # 404 page
```

**Benefits:**

- Route groups `(folder)` organize related routes without affecting URL structure
- Co-locate related functionality
- Clear separation of concerns

### 2. **Component Organization**

```
src/components/
├── common/                     # Shared across entire app
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   ├── Input/
│   └── Card/
├── features/                   # Feature-specific components
│   ├── auth/
│   │   ├── LoginForm/
│   │   ├── SignupForm/
│   │   └── SocialLogin/
│   ├── chat/
│   │   ├── ChatWindow/
│   │   ├── MessageList/
│   │   └── MessageInput/
│   └── dashboard/
│       ├── StatCard/
│       └── ActivityFeed/
├── layout/                     # Layout components
│   ├── Header/
│   ├── Footer/
│   ├── Sidebar/
│   └── Navigation/
└── ui/                         # UI library components (shadcn/ui, aceternity)
    ├── button.tsx
    ├── card.tsx
    └── dialog.tsx
```

**Benefits:**

- Components grouped by usage pattern
- Easy to find and maintain
- Clear ownership and responsibility

### 3. **Hooks Organization**

```
src/hooks/
├── auth/
│   ├── useAuth.ts
│   ├── useLogin.ts
│   └── useSignup.ts
├── api/
│   ├── useUsers.ts
│   ├── useClasses.ts
│   └── useFeedback.ts
├── ui/
│   ├── useTheme.ts
│   ├── useModal.ts
│   └── useToast.ts
└── utils/
    ├── useDebounce.ts
    ├── useLocalStorage.ts
    └── useMediaQuery.ts
```

**Benefits:**

- Hooks organized by domain
- Easy to discover related hooks
- Promotes reusability

### 4. **State Management (Redux)**

```
src/store/
├── index.ts                    # Store configuration
├── rootReducer.ts              # Root reducer
├── hooks.ts                    # Typed hooks (useAppDispatch, useAppSelector)
└── features/
    ├── auth/
    │   ├── authSlice.ts
    │   ├── authThunks.ts
    │   └── authSelectors.ts
    ├── user/
    │   ├── userSlice.ts
    │   └── userSelectors.ts
    ├── teacher/
    │   └── teacherSlice.ts
    └── parent/
        └── parentSlice.ts
```

**Benefits:**

- Feature-based slice organization
- Separation of sync/async logic
- Centralized selectors for performance

### 5. **API Layer**

```
src/lib/api/
├── client.ts                   # API client configuration (axios/fetch)
├── types.ts                    # API types
└── endpoints/
    ├── auth.ts                 # Auth endpoints
    ├── users.ts                # User endpoints
    ├── classes.ts              # Classes endpoints
    └── feedback.ts             # Feedback endpoints

src/app/api/                    # Next.js API routes
├── auth/
│   └── [...nextauth]/
│       └── route.ts
├── users/
│   └── route.ts
└── classes/
    └── route.ts
```

**Benefits:**

- Centralized API logic
- Type-safe API calls
- Easy to mock for testing

### 6. **Types & Interfaces**

```
src/types/
├── index.ts                    # Re-export all types
├── models/
│   ├── user.ts
│   ├── teacher.ts
│   ├── parent.ts
│   └── class.ts
├── api/
│   ├── requests.ts
│   └── responses.ts
└── components/
    └── props.ts
```

**Benefits:**

- Single source of truth for types
- Easy to share across the application
- Better TypeScript inference

### 7. **Utilities & Helpers**

```
src/utils/
├── format/
│   ├── date.ts
│   ├── number.ts
│   └── string.ts
├── validation/
│   ├── schemas.ts              # Zod/Yup schemas
│   └── validators.ts
├── helpers/
│   ├── array.ts
│   └── object.ts
└── constants/
    ├── routes.ts
    ├── config.ts
    └── messages.ts
```

**Benefits:**

- Pure functions easy to test
- Reusable across features
- Clear categorization

### 8. **Static Assets**

```
public/
├── images/
│   ├── logos/
│   ├── avatars/
│   ├── backgrounds/
│   └── thumbnails/
├── fonts/
├── icons/
└── documents/
```

**Benefits:**

- Organized by asset type
- Easy to find and manage
- Optimized for Next.js Image component

### 9. **Styling**

```
src/styles/
├── globals.css                 # Global styles
├── variables.css               # CSS variables
├── themes/
│   ├── light.css
│   └── dark.css
└── utilities/
    └── tailwind.css            # Custom Tailwind utilities
```

**Benefits:**

- Centralized styling
- Easy theme management
- Consistent design tokens

### 10. **Testing**

```
src/__tests__/
├── components/
├── hooks/
├── utils/
└── integration/

# OR co-located with source files:
src/components/Button/
├── Button.tsx
├── Button.test.tsx
└── Button.stories.tsx
```

**Benefits:**

- Tests close to implementation
- Easy to maintain
- Clear test coverage

## Key Principles

### 1. **Feature-First Organization**

Group files by feature rather than type when the feature is complex.

```
src/features/
├── authentication/
│   ├── components/
│   ├── hooks/
│   ├── api/
│   └── types/
└── classroom/
    ├── components/
    ├── hooks/
    └── api/
```

### 2. **Barrel Exports**

Use `index.ts` files to simplify imports:

```typescript
// src/components/common/index.ts
export { Button } from "./Button/Button";
export { Input } from "./Input/Input";
export { Card } from "./Card/Card";

// Usage
import { Button, Input, Card } from "@/components/common";
```

### 3. **Absolute Imports**

Configure path aliases in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"]
    }
  }
}
```

### 4. **Naming Conventions**

- **Components**: PascalCase (`Button.tsx`, `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (`useAuth.ts`, `useLocalStorage.ts`)
- **Utils**: camelCase (`formatDate.ts`, `validateEmail.ts`)
- **Constants**: UPPER_SNAKE_CASE or camelCase in files
- **Types**: PascalCase for interfaces/types
- **Folders**: kebab-case or camelCase (be consistent)

### 5. **File Organization Rules**

1. **Single Responsibility**: Each file should have one primary export
2. **Co-location**: Keep related files close together
3. **Shallow Structure**: Avoid deep nesting (max 3-4 levels)
4. **Consistent Naming**: Use the same name for file and export

## Recommended Migration Steps

### Phase 1: Reorganize Components

- [ ] Create `components/common`, `components/features`, `components/layout`
- [ ] Move UI library components to `components/ui`
- [ ] Group auth components under `components/features/auth`

### Phase 2: Restructure Hooks

- [ ] Create domain-based folders (`hooks/auth`, `hooks/api`, `hooks/ui`)
- [ ] Move existing hooks to appropriate folders

### Phase 3: Consolidate State Management

- [ ] Create `store/features` structure
- [ ] Move slices to feature folders
- [ ] Add selectors and thunks

### Phase 4: Type System

- [ ] Create `src/types` directory
- [ ] Extract and organize types
- [ ] Remove duplicate type definitions

### Phase 5: API Layer

- [ ] Create `lib/api` for client-side API calls
- [ ] Organize API routes in `app/api`
- [ ] Implement consistent error handling

## Additional Resources

- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [React Project Structure Best Practices](https://www.robinwieruch.de/react-folder-structure/)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)

## Notes

- This structure scales well for medium to large applications
- Adapt based on team size and project complexity
- Consistency is more important than the "perfect" structure
- Document your decisions and patterns in team guidelines
