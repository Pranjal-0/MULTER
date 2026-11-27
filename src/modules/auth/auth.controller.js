import * as authService from "./auth.service.js";
import ApiResponse from "../../common/utils/api-response.js";
import ApiError from "../../common/utils/api-error.js";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  ApiResponse.created(res, "Registration success", user);
};

const login = async (req, res) => {
  const { user, accessToken, refreshToken } = await authService.login(req.body);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  ApiResponse.ok(res, "Login successful", { user, accessToken });
};

const logout = async (req, res) => {
  await authService.logout(req.user.id);
  res.clearCookie("refreshToken");
  ApiResponse.ok(res, "Logout Success");
};

const getMe = async (req, res) => {
  const user = await authService.getMe(req.user.id);
  ApiResponse.ok(res, "User Profile", user);
};


const uploadAvatar =  async (req,res) => {
    try {
      const file = req.file;
      if(!file){
        return ApiError.badRequest(res,"no file uploaded , upload the file")
      }
      const result = await authService.AvatarUpload(req.user.id)


      return ApiResponse.ok(res,"avatar uploaded sunccesflyy",{avatarUrl:result.url})
    } catch (error) {
      console.error("upload file",error)
      return ApiError.internal(res,error.message || "failed to upload"
      )
      
    }
}
export { register, login, logout, getMe,uploadAvatar };
