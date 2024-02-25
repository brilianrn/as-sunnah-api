export default (error: string, name?: string) => {
  console.log(`===============${name ? ` ${name} ` : ''}===============`);
  console.log(error);
};
