import { Request, Response } from "express"
import { SettingsService } from "../services/SettingsService"


class SettingsController {
  async create(request: Request, response: Response){
    const settingsService = new SettingsService()

    const { chat, username } = request.body


    const settings = await settingsService.create({ chat, username })

    return response.json(settings)
  }
}

export { SettingsController }
