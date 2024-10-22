import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";


const PlumpSelectComponentIcon = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M12.0001 1.49992C11.536 1.49992 11.0909 1.68429 10.7627 2.01248C10.4345 2.34067 10.2501 2.78579 10.2501 3.24992C10.2501 3.71405 10.4345 4.15917 10.7627 4.48736C11.0909 4.81554 11.536 4.99992 12.0001 4.99992C12.4642 4.99992 12.9094 4.81554 13.2375 4.48736C13.5657 4.15917 13.7501 3.71405 13.7501 3.24992C13.7501 2.78579 13.5657 2.34067 13.2375 2.01248C12.9094 1.68429 12.4642 1.49992 12.0001 1.49992ZM9.08344 3.24992C9.08344 2.47637 9.39073 1.7345 9.93771 1.18752C10.4847 0.640543 11.2266 0.333252 12.0001 0.333252C12.7737 0.333252 13.5155 0.640543 14.0625 1.18752C14.6095 1.7345 14.9168 2.47637 14.9168 3.24992C14.9168 4.02347 14.6095 4.76533 14.0625 5.31231C13.5155 5.85929 12.7737 6.16658 12.0001 6.16658C11.2266 6.16658 10.4847 5.85929 9.93771 5.31231C9.39073 4.76533 9.08344 4.02347 9.08344 3.24992ZM11.9919 6.74992C14.3533 6.73942 16.6644 7.16292 19.4895 7.98659C19.713 8.04838 19.9219 8.15395 20.1042 8.29717C20.2865 8.44039 20.4385 8.6184 20.5514 8.82086C20.6643 9.02333 20.7359 9.24621 20.762 9.47657C20.788 9.70692 20.7681 9.94016 20.7032 10.1627C20.6384 10.3853 20.53 10.5928 20.3843 10.7731C20.2386 10.9534 20.0585 11.103 19.8545 11.2131C19.6505 11.3233 19.4267 11.3918 19.196 11.4147C18.9653 11.4376 18.7324 11.4145 18.5107 11.3466C18.1006 11.2268 17.6887 11.1133 17.2752 11.0059C17.5552 11.9305 17.7961 12.8936 17.8294 13.8368C17.8737 15.1033 17.5464 16.3498 16.4953 17.4628L16.0764 22.0753C16.0362 22.5242 15.8242 22.9403 15.4847 23.2369C15.1452 23.5334 14.7043 23.6876 14.254 23.6671C13.8037 23.6466 13.3787 23.4532 13.0674 23.1271C12.7562 22.801 12.5828 22.3674 12.5834 21.9166V18.997C12.3925 18.9993 12.2016 19.0003 12.0106 18.9999H11.9896C11.7987 19.0003 11.6077 18.9993 11.4168 18.997V21.9166C11.4174 22.3674 11.244 22.801 10.9328 23.1271C10.6216 23.4532 10.1965 23.6466 9.74619 23.6671C9.29587 23.6876 8.85503 23.5334 8.51553 23.2369C8.17602 22.9403 7.96405 22.5242 7.92378 22.0753L7.50436 17.4628C6.45728 16.3533 6.12769 15.1114 6.17028 13.8485C6.20178 12.9064 6.44094 11.9451 6.72036 11.0211C6.3198 11.1214 5.90233 11.2321 5.46794 11.353C5.02068 11.4771 4.54244 11.4184 4.13844 11.1899C3.73444 10.9613 3.43777 10.5817 3.31369 10.1344C3.18962 9.68715 3.2483 9.20892 3.47682 8.80492C3.70535 8.40092 4.08501 8.10425 4.53228 7.98017C7.33344 7.20258 9.63644 6.76159 11.9919 6.74992ZM19.1634 9.10659C16.3984 8.301 14.2063 7.90667 11.9972 7.91658C9.79044 7.9265 7.60061 8.3395 4.84378 9.10425C4.69464 9.14564 4.56804 9.24457 4.49185 9.37929C4.41566 9.51401 4.3961 9.67349 4.43748 9.82263C4.47887 9.97177 4.5778 10.0984 4.71253 10.1746C4.84725 10.2507 5.00672 10.2703 5.15586 10.2289C5.91872 10.015 6.68704 9.8211 7.46003 9.64733L8.45403 9.42684L8.14136 10.3958C7.73886 11.6412 7.37253 12.7991 7.33636 13.8876C7.30136 14.9364 7.57553 15.9024 8.47561 16.7868L8.62844 16.9367L9.08578 21.9691C9.0992 22.1187 9.16983 22.2574 9.28295 22.3562C9.39608 22.4551 9.54298 22.5065 9.69305 22.4997C9.84313 22.4929 9.9848 22.4285 10.0886 22.3199C10.1923 22.2113 10.2502 22.0668 10.2501 21.9166V17.7673L10.8725 17.8093C11.2225 17.8327 11.5894 17.8333 12.0001 17.8333C12.4108 17.8333 12.7777 17.8333 13.1277 17.8099L13.7501 17.7668V21.9166C13.75 22.0668 13.8079 22.2113 13.9116 22.3199C14.0154 22.4285 14.1571 22.4929 14.3072 22.4997C14.4572 22.5065 14.6041 22.4551 14.7173 22.3562C14.8304 22.2574 14.901 22.1187 14.9144 21.9691L15.3718 16.9367L15.5246 16.7868C16.4276 15.9001 16.7006 14.9312 16.6633 13.8777C16.6254 12.7851 16.2549 11.6231 15.8519 10.3736L15.5374 9.40059L16.5349 9.62575C17.2559 9.78792 18.0172 9.98742 18.8368 10.2266C18.9853 10.2699 19.1449 10.2524 19.2806 10.1781C19.4162 10.1037 19.5168 9.97844 19.5601 9.82992C19.6034 9.6814 19.586 9.52175 19.5116 9.3861C19.4372 9.25045 19.312 9.1499 19.1634 9.10659Z" fill="#B4002D" stroke="#B4002D" strokeWidth="0.25"/>
      </Svg>
    </View>
  );
};

export default PlumpSelectComponentIcon;