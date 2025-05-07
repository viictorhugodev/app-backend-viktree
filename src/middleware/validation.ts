import type {NextFunction, Request, Response} from 'express'
import { validationResult } from 'express-validator'

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
  let errors = validationResult(req)

  console.log('Desde  validation.ts')
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

  next()
}