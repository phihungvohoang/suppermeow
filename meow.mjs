import fetch from "node-fetch";

async function getInfo() {
  const headers = {
    Accept: "*/*",
    Connection: "keep-alive",
    "Content-Type": "application/json",
  }; 
 // replace body here - thay body của tôi thành của bạn ở dưới đây đây
  const body = {
    user: {
      id: 1811412447,
      first_name: "Izaass",
      last_name: "",
      username: "izaassanons",
      language_code: "en",
      allows_write_to_pm: true,
    },
  };
 // replace params here - thay param của tôi thành của bạn ở dưới đây đây
const params = "telegram=1811412447&auth_data=%7B%22query_id%22:%22AAHf9fdrAAAAAN_192veuuZK%22,%22user%22:%22%7B%5C%22id%5C%22:1811412447,%5C%22first_name%5C%22:%5C%22Izaass%5C%22,%5C%22last_name%5C%22:%5C%22%5C%22,%5C%22username%5C%22:%5C%22izaassanons%5C%22,%5C%22language_code%5C%22:%5C%22en%5C%22,%5C%22allows_write_to_pm%5C%22:true%7D%22,%22auth_date%22:%221717059171%22,%22hash%22:%22fc106a078e6d27af92161b20762771f4e885815d5bb9b4f6f0f56371f8677c8c%22%7D";
 const urlInfo = "https://api.supermeow.vip/meow/info?"+params;
  const urlClaim = "https://api.supermeow.vip/meow/claim?"+params;
  try {
    const response = await fetch(urlInfo, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      const nextClaim = 3600 - data.time_ran;
    //   console.log(
    //     "Next claim:",
    //     Math.floor(nextClaim / 60),
    //     "min",
    //     Math.floor(nextClaim `),
    //     "sec"
    //   );

      if (nextClaim != 0) {
        const response = await fetch(urlClaim, {
          method: "POST",
          headers: headers,
        });
        if (response.ok) {
          const responseData = await response.json(); // Parse response as JSON
          console.log(
            `\x1b[0;30m=====================Dev By Hazel==============================\x1b[0m`
          );
          console.log("Balance:", responseData.balance);
          console.log("Status:",'\x1b[32m', '+' + data.claimable,'\x1b[0m');


        }
      }
    } else {
      console.log(`Failed to post. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getInfo();
// Call getInfo every 60 seconds
setInterval(() => getInfo(), 60000);

