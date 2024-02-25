import Image from 'next/image';
import userImage from '../user/Foto_Anisa Rahmasari.jpeg'


const user = {
    name: 'Anisa Rahmasari',
    nim : 2141720216,
    imageSize: 300,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>Nama : {user.name}</h1>
        <h1>NIM: {user.nim}</h1>
        <Image
          className="avatar"
          src={userImage}
          alt={'Foto ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }