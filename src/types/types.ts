export interface NavItem {
    name: string;
    icon: React.ReactNode;
    page: string;
  }
  
  export interface FormSubmission {
    id: number;
    website: string;
    entries: number;
    lastSubmission: string;
  }
  
  export interface NavigationProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  }

  export interface FormEntry {
    id: number;
    username: string;
    email: string;
    password: string;
  }