import type { EditHeadwearById, UpdateHeadwearInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormHeadwear = NonNullable<EditHeadwearById['headwear']>

interface HeadwearFormProps {
  headwear?: EditHeadwearById['headwear']
  onSave: (data: UpdateHeadwearInput, id?: FormHeadwear['id']) => void
  error: RWGqlError
  loading: boolean
}

const HeadwearForm = (props: HeadwearFormProps) => {
  const onSubmit = (data: FormHeadwear) => {
    props.onSave(data, props?.headwear?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormHeadwear> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.headwear?.imageUrl}
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

export default HeadwearForm
