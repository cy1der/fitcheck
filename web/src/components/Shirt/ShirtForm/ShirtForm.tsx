import type { EditShirtById, UpdateShirtInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormShirt = NonNullable<EditShirtById['shirt']>

interface ShirtFormProps {
  shirt?: EditShirtById['shirt']
  onSave: (data: UpdateShirtInput, id?: FormShirt['id']) => void
  error: RWGqlError
  loading: boolean
}

const ShirtForm = (props: ShirtFormProps) => {
  const onSubmit = (data: FormShirt) => {
    props.onSave(data, props?.shirt?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormShirt> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="imageUrl"
          defaultValue={props.shirt?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageUrl" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ShirtForm
