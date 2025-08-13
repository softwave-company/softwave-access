import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Props do Provider
interface AuthProviderProps {
  children: ReactNode;
}

// Tipo do usuário
interface AuthUser {
  id: number;
  nome: string;
  email: string;
  cpf: string | null;
  data_nascimento: string | null;
  telefone: string | null;
}

// Tipo do contexto
interface AuthContextType {
  user: AuthUser | null;
  login: (userData: AuthUser) => void;
  logout: () => void;
}

// Contexto com valor inicial null
export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData: AuthUser) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
