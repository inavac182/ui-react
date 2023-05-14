import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path d="M392 512H120C53.832 512 0 458.168 0 392V120C0 53.832 53.832 0 120 0h272c66.168 0 120 53.832 120 120v272c0 66.168-53.832 120-120 120zM120 40c-44.112 0-80 35.888-80 80v272c0 44.112 35.888 80 80 80h272c44.112 0 80-35.888 80-80V120c0-44.112-35.888-80-80-80zm212 150c13.807 0 25-11.193 25-25-1.317-33.162-48.688-33.153-50 0 0 13.807 11.193 25 25 25zm96.152 89.933c-8.32-7.262-20.955-6.407-28.22 1.916l-33.843 38.772c-11.891 12.933-23.062 13.823-37.206 2.927 0 0-93.011-88.083-93.478-88.453a69.832 69.832 0 0 0-90.231 2.858c-.414.372-58.742 62.344-58.742 62.344-7.568 8.045-7.182 20.703.863 28.271 8.047 7.569 20.704 7.181 28.271-.864l56.905-60.492a29.922 29.922 0 0 1 37.501-1.22s92.974 88.048 93.44 88.417C317.268 365.365 333.232 371 348 371c11.863-.389 30.565-4.719 47.77-23.562.101-.11.2-.221.298-.333l34-38.952c7.263-8.322 6.406-20.957-1.916-28.22z" />
  </svg>
);
export default SvgImage;
