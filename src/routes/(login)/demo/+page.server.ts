// export async function load() {
//   console.log(1)
//   // 定义请求参数
//   const requestParams = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjg0Mywicm9sZSI6Imdyb3VwIiwicHYiOjEsImFwcElkIjoiIiwiZ3JvdXBJZCI6IjMyMTdhY2YzLTI1NWYtNDExYi04MmZiLThjYTc1MmEwM2MyNiIsImlhdCI6MTcyMTg5NTAwMywiZXhwIjoxNzIxOTgxNDAzfQ.mz8oR6ZgLBI1D7HDDP_y9za6LklMu69SnQ3LaGr_Lf0"
//     },
//     body: JSON.stringify({
//       page: {
//         page: 1,
//         limit: 99,
//         ascs: "",
//         descs: ""
//       }
//     })
//   }

//   // 发送请求
//   fetch("https://s.vscloud.vip/api/vr/rooms/page", requestParams)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`)
//       }
//       return response.json() // 解析响应体为 JSON
//     })
//     .then(data => {
//       const filteredList = data.data.list.filter((item: { vrRoomsIcon: string | string[] }) => {
//         // 检查 vrRoomsIcon 属性是否存在并且包含 vsoss.vswork.vip 字符串
//         return item.vrRoomsIcon && !item.vrRoomsIcon.includes("vsoss.vswork.vip")
//       })
//       console.log(filteredList.length)
//     })
//     .catch(error => {
//       console.error("Error:", error)
//     })
//   return {
//     serverMessage: "hello from server load function"
//   }
// }
