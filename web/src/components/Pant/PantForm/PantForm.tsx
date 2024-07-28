import type { EditPantById, UpdatePantInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormPant = NonNullable<EditPantById['pant']>

interface PantFormProps {
  pant?: EditPantById['pant']
  onSave: (data: UpdatePantInput, id?: FormPant['id']) => void
  error: RWGqlError
  loading: boolean
}

const PantForm = (props: PantFormProps) => {
  const onSubmit = (data: FormPant) => {
    props.onSave(data, props?.pant?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPant> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.pant?.imageUrl}
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

export default PantForm
