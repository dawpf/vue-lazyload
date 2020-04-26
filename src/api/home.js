import request from "@u/request.js"
import Service from "@u/service.js"

export function getImage(params) {
  return request.get(Service.img_list, params)
}