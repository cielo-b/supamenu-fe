import { EBusinessCategory, EUser } from "../enums/enums";

export interface LandingCardProps {
  icon: any;
  title: string;
  desc: string;
}

export interface CreateClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (clientData: ClientData) => void;
}

export interface ClientData {
  name: string;
  email: string;
  phone: string;
  address: string;
  category: string;
  representative: string;
  dateOfCreation: string;
  bankAccount: string;
  businessType: string;
}

export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: EUser;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface ClientInitialState {
  client: Client | null;
  loading: boolean;
  error: string | null;
}

export interface Client {
  clientName: string | null;
  category: EBusinessCategory | null;
  representative: string | null;
  creationDate: Date | null;
  address: string | null;
  email: string | null;
  phone: string | null;
  bankAccount: string | null;
}

export interface CreateClientDTO {
  clientName: string;
  category: EBusinessCategory;
  representative: string;
  creationDate: Date;
  address: string;
  email: string;
  phone: string;
  bankAccount: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface ApiErrorResponse {
  success: boolean;
  error?: string;
  message: string;
  timestamp?: string;
  details?: Record<string, string>;
}

export interface ValidationErrorResponse extends ApiErrorResponse {
  error: "VALIDATION_ERROR";
  details: Record<string, string>;
}

export interface RouteGuardProps {
  children: React.ReactNode;
  roles?: string[];
}
