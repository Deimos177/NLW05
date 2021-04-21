import { Request, Response } from "express"
import { SettingsService } from "../services/SettingsService"


class SettingsController {
  async create(request: Request, response: Response){
    const settingsService = new SettingsService()

    const { chat, username } = request.body


    try{
      const settings = await settingsService.create({ chat, username })

      return response.status(201).json(settings)
    }catch(error){
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { SettingsController }
