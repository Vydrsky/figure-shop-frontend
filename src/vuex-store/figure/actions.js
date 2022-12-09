import axios from "axios";

export default {
  async getAllFigures(context) {
    try {
      const response = await axios.get("https://localhost:5001/api/figures/", {
        headers: {
          "content-type": "application/json",
        },
      });

      const figures = response.data.content;
      context.commit("setFigures", figures);
    } catch (e) {
      console.log(e.message);
    }
  },
};
