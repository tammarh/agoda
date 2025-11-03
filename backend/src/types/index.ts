export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  student_id: string | null;
  created_at: string;
  updated_at: string;
};

export type Department = {
  id: string;
  name_he: string;
  description_he: string;
  icon: string;
  order_index: number;
  created_at: string;
};

export type NewsUpdate = {
  id: string;
  title_he: string;
  content_he: string;
  image_url: string | null;
  published_at: string;
  created_at: string;
};

export type GalleryImage = {
  id: string;
  title_he: string;
  image_url: string;
  description_he: string | null;
  event_date: string;
  created_at: string;
};

export type StoreProduct = {
  id: string;
  name_he: string;
  description_he: string;
  price: number;
  image_url: string;
  in_stock: boolean;
  created_at: string;
};

export type RightCategory = {
  id: string;
  title_he: string;
  description_he: string;
  order_index: number;
  created_at: string;
};

export type AuthCredentials = {
  email: string;
  password: string;
};

export type RegisterData = AuthCredentials & {
  fullName: string;
  studentId: string;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};
