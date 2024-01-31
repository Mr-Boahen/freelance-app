import axios from "axios";

const signup = async ({ firstName, lastName, email, tel, password }) => {
  try {
    const name = `${firstName} ${lastName}`;
    const { data } = await axios.post(
      "http://localhost:8000/api/users/register",
      {
        name,
        email,
        tel,
        password,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post("http://localhost:8000/api/users/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

const updateProfile = async ({
  description,
  skill,
  certification,
  name,
  basePrice,
  deliveryTime,
  gigDescription,
  revisions,
  gigType,
}) => {
  const token = JSON.parse(localStorage.getItem("account")).token;

  try {
    const { data } = await axios.put(
      "http://localhost:8000/api/users/updateProfile",
      {
        description,
        skill,
        certification,
        name,
        basePrice,
        deliveryTime,
        gigDescription,
        revisions,
        gigType,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

const getAllPartners = async () => {
  try {
    const allPartners = await axios.get(
      "http://localhost:8000/api/users/getAllPartners"
    );
   
    return allPartners;
  } catch (error) {
    throw error;
  }
};

const updateProfilePicture = async (formData) => {
  try {
    const token = JSON.parse(localStorage.getItem("account")).token;
    const { data } = await axios.put(
      "http://localhost:8000/api/users/updateProfilePicture",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const getSeller = async (_id) => {
  try {
    const token = JSON.parse(localStorage.getItem("account")).token;
    const seller = await axios.get(
      "http://localhost:8000/api/users/getSeller",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { _id },
      }
    );
    return seller;
  } catch (error) {
    throw error;
  }
};

const searchPartners = async (name, gigType) => {
  try {
    const token = JSON.parse(localStorage.getItem("account")).token;
    const partners = await axios.get(
      "http://localhost:8000/api/users/searchPartners",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { name, gigType },
      }
    );
    return partners;
  } catch (error) {
    throw error;
  }
};
const payPartner = async ({ provider, tel }, _id) => {
  try {
    const token = JSON.parse(localStorage.getItem("account")).token;
    const receipt = await axios.post(
      "http://localhost:8000/api/users/payPartner",
      { provider, tel, _id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return receipt;
  } catch (error) {
    throw error;
  }
};

const deleteSkill=async(arrayIndex)=>{
  try {
    const token = JSON.parse(localStorage.getItem("account")).token;
    const message=await axios.post("http://localhost:8000/api/users/deleteSkill",{arrayIndex}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
     return message
  } catch (error) {
    throw error;
    
  }
}

export {
  getAllPartners,
  getSeller,
  updateProfile,
  updateProfilePicture,
  signup,
  login,
  searchPartners,
  payPartner,
  deleteSkill
};
