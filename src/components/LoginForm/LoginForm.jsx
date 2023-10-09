import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { useState } from 'react';
import * as Yup from 'yup';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginFormBtn, LoginFormWrapp } from './LoginForm.styled';
const LogInSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  return (
    <LoginFormWrapp>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LogInSchema}
        onSubmit={({ ...values }, actions) => {
          dispatch(logIn({ ...values }));
          actions.resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email">
              {({ field, form: { touched, errors } }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                  margin="normal"
                  autoComplete="off"
                  size="small"
                />
              )}
            </Field>

            <Field name="password">
              {({ field, form: { touched, errors } }) => (
                <TextField
                  {...field}
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  variant="outlined"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  fullWidth
                  margin="normal"
                  autoComplete="off"
                  size="small"
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handlePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </Field>

            <LoginFormBtn type="submit">Log In</LoginFormBtn>
          </form>
        )}
      </Formik>
    </LoginFormWrapp>
  );
};
