import packageConfig from '../../package.json';

const formPostUrl = packageConfig.pedialab.contactFormEndpoint;

export const postContactForm = async (
  formState: Record<string, string> | null
) => {
  if (formState) {
    const res = await fetch(formPostUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    });
    return res.ok;
  }
  return false;
};

export default formPostUrl;
