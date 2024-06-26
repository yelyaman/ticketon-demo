import Joi from 'joi'

export const CreateBranchSchema = Joi.object({
  PartnerIDRef: Joi.number().required(),
  branches: Joi.array().items(
    Joi.object({
      PointOfSaleID: Joi.string().guid().required(),
      BranchName: Joi.string().required(),
      CityIDRef: Joi.number().optional(),
      United: Joi.boolean().optional(),
    }),
  ),
})
