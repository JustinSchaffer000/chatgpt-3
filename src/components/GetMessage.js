const DEFAULT_PARAMS = {
  model: "text-davinci-003",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

const GetMessage = async (params = {}) => {
  let params_ = DEFAULT_PARAMS;
  params_["prompt"] = params["prompt"];
  const openai_api_key = params["APIKEY"];
  // console.log("parma", params_);
  // console.log("APIKEY", openai_api_key);
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
  // console.log(data);
  return data.choices[0].text;
};

export default GetMessage;
