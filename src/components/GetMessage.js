const openai_api_key = "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";

const DEFAULT_PARAMS = {
  model: "text-davinci-003",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

const GetMessage = async (params = {}) => {
  const params_ = { ...DEFAULT_PARAMS, ...params };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(openai_api_key),
    },
    body: JSON.stringify(params_),
  };
  const response = await fetch(
    "https://api.openai.com/v1/completions",
    requestOptions
  );
  const data = await response.json();
  console.log(data);
  return data.choices[0].text;
};

export default GetMessage;
