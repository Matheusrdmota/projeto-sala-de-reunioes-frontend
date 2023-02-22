declare let window: any;
	
export const environment = {
  production: true,
  ...window["env"],
};
