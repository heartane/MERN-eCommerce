import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true, // 필수 항목
      unique: true, // 동일 이메일이 없도록 설정
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // 모든 유저가 관리자가 아니므로
    },
  },
  {
    timeStamps: true,
  } // 두번쨰 인자로 옵션을 줄 수 있는데 시간 필드를 자동으로 생성해준다.
);

const User = mongoose.model('User', userSchema);

export default User;
// 유저 스키마 작성 및 모델 생성
