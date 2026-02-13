"use client";

import { createContext, useContext } from "react";

type LeadFormContextValue = {
  open: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

type LeadFormProviderProps = {
  value: LeadFormContextValue;
  children: React.ReactNode;
};

export function LeadFormProvider({ value, children }: LeadFormProviderProps) {
  return <LeadFormContext.Provider value={value}>{children}</LeadFormContext.Provider>;
}

export function useLeadForm() {
  return useContext(LeadFormContext);
}
