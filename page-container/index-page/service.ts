import packageConfig from '../../package.json';

const formPostUrl = packageConfig.pedialab.contactFormEndpoint;

export const postContactForm = (
  formState: Record<string, string> | null
) => {
  if (formState) {
    fetch(formPostUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    });
  }
};

export default formPostUrl;
