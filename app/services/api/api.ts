import { ApiResponse, ApisauceInstance, create } from "apisauce"
import Config from "../../config"
import type { ApiConfig } from "./api.types"

/** Configuring the apisauce instance. */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /** Set up our API instance. Keep this lightweight! */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  /** A generic method to make POST requests. */
  async post<ResponseType>(endpoint: string, payload: any): Promise<ApiResponse<ResponseType>> {
    return this.apisauce.post<ResponseType>(endpoint, payload)
  }

  /** A generic method to make GET requests. */
  async get<ResponseType>(endpoint: string, params?: any): Promise<ApiResponse<ResponseType>> {
    return this.apisauce.get<ResponseType>(endpoint, params)
  }

  // You can add more methods like PUT, DELETE, etc. in a similar manner if needed.
}

// Singleton instance of the API for convenience
export const api = new Api()
