/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState } from 'react'

import { mdiCamera, mdiCheck, mdiClose } from '@mdi/js'
import Icon from '@mdi/react'
import { init } from 'filestack-js'
import Webcam from 'react-webcam'

const Camera = ({ onCaptureComplete }) => {
  const webcamRef = useRef(null)
  const [processedImage, setProcessedImage] = useState(null)
  const [uploading, setUploading] = useState(false)

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot()
    removeBackground(imageSrc)
  }

  const fsClient = init(process.env.REDWOOD_ENV_FILESTACK_API_KEY)

  const dataURLtoFile = (dataurl: string, filename: string) => {
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  }

  const removeBackground = async (imageSrc: string) => {
    try {
      const formData = new FormData()
      formData.append('image_file', dataURLtoFile(imageSrc, 'captured.jpg'))
      formData.append('size', 'auto')
      formData.append('crop', 'true')

      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': process.env.REDWOOD_ENV_REMOVEBG_API_KEY,
        },
        body: formData,
      })

      if (response.ok) {
        const blob = await response.blob()
        const reader = new FileReader()
        reader.onloadend = () => {
          setProcessedImage(reader.result)
        }
        reader.readAsDataURL(blob)
      } else {
        console.error('Error removing background:', response.statusText)
      }
    } catch (error) {
      console.error('Error removing background:', error)
    }
  }

  const submit = async () => {
    setUploading(true)

    if (webcamRef.current && webcamRef.current.srcObject) {
      const stream = webcamRef.current.srcObject
      const tracks = stream.getTracks()
      tracks.forEach((track) => track.stop())
    }

    const res = await fsClient.upload(processedImage)

    setUploading(false)

    onCaptureComplete(res.url)
  }

  return (
    <div className="mx-auto flex w-96 justify-center">
      <div className="grid grid-cols-1 grid-rows-2 gap-4">
        {processedImage ? (
          <>
            <img src={processedImage} alt="Processed" />
            <div className="flex w-full justify-center space-x-4">
              <button
                onClick={() => setProcessedImage(null)}
                className="btn flex h-20 flex-1 justify-center"
              >
                <Icon path={mdiClose} className="h-16" />
              </button>
              <button
                onClick={submit}
                className="btn flex h-20 flex-1 justify-center"
              >
                {uploading ? (
                  <span className="loading loading-spinner loading-lg"></span>
                ) : (
                  <Icon path={mdiCheck} className="h-16" />
                )}
              </button>
            </div>
          </>
        ) : (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/png"
              className="rounded-2xl"
            />
            <button onClick={capture} className="btn h-24 rounded-2xl">
              <Icon path={mdiCamera} className="h-18 mx-20 w-20" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Camera
