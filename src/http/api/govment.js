import serviceAxios from '../index'
console.log(serviceAxios);
export const getGovment = ()=>{
    return serviceAxios({
        method:"get",
        url:"api/v1/rest/datastore/F-D0047-089?Authorization=CWB-84EDB16B-47D4-45F9-A113-B9C24F7F4E65&limit=10&locationName=%E9%AB%98%E9%9B%84%E5%B8%82",
    })
}