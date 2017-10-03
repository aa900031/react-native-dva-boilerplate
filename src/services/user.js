export function POST_login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        status: 200,
        data: {
          account: 'user1',
          name: 'User 001',
          token: 'ec@fbwc11_c',
        }
      })
    }, 1000);
  });
}
