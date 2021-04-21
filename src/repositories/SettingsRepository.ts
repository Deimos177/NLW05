import { EntityRepository, Repository } from "typeorm";
import { setting } from "../entities/Setting";

@EntityRepository(setting)
class SettingsRepository extends Repository<setting> {
  
}

export { SettingsRepository}