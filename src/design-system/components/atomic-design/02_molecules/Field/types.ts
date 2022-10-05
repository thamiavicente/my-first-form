export type Props = {
  inputPlaceholder: string;
  inputValue?: string;
  labelText: string;
  register: any;
  hasErrors?: { hasErrors: boolean; errorMessage: string | undefined };
};
