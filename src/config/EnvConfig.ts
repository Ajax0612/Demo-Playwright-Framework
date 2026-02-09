import dotenv from 'dotenv';

interface EnvironmentConfig {
  baseURL: string;
  
  empUser: string;
  empPassword : string;
  empUser_prod : string;
  empPassword_prod : string;
  
  customerUser : string;
  customerPassword : string;

}
const envConfig = (): EnvironmentConfig => {
  const env = dotenv.config({
    path: `.env`,
    override: true,
  });


  
  // Non SSO credentials
  const baseURL: string = String(process.env.BASE_URL);
  const empUser = String(process.env.EMPUSERNAME_LOWERENV);
  const empPassword = String (process.env.EMPPASSWORD_LOWERENV);

  const empUser_prod = String(process.env.EMPUSERNAME);
  const empPassword_prod = String (process.env.EMPPASSWORD);

  const customerUser = String(process.env.CUSTOMERUSERNAME);
  const customerPassword = String (process.env.CUSTOMERPASSWORD);

  

  return {
    baseURL,
    empUser,
    empPassword,
    empUser_prod,
    empPassword_prod,
    customerUser,
    customerPassword
  };
};
export default envConfig;