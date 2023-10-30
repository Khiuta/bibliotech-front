import styled from 'styled-components';

export const Loader = styled.div`
  border: 16px solid #a1a1a1; /* Light grey */
  border-top: 16px solid #135e27; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
