import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useAsync, useForm } from '../../core'
import { useAuth } from '../../hooks/useAuth'
import userService from '../../services/user.service'

export default function Profile() {

    const { user } = useAuth()
    const {excute: updateInfo, error,loading} = useAsync(userService.updateInfo)
    const { form, register, validate} = useForm({ 
        name: [
            {required: true}
        ]
    },user)

    const onSubmit = async (ev) => {
       ev.preventDefault()
        if (validate()){
            try{
                const user = await updateInfo(form)
            }
            catch(err){

            }
        }
    }
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
          {/* Form */}
          {error}
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-12 col-md-12">
                {/* Email */}
                {/* <div className="form-group">
                  <label htmlFor="accountFirstName">
                    First Name *
                  </label>
                  <input className="form-control form-control-sm" id="accountFirstName" type="text" placeholder="First Name *" defaultValue="Daniel" required />
                </div> */}
                <Input
                    placeholder=" Full Name *"
                    label=" Full Name *"
                    {...register('name')}
                />
              </div>
              
              <div className="col-12">
                {/* Email */}
                {/* <div className="form-group">
                  <label htmlFor="accountEmail">
                    Email Address *
                  </label>
                  <input className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" defaultValue="user@email.com" required />
                </div> */}
                <Input
                    placeholder="Email Address *"
                    label="Email Address *"
                    disabled
                    {...register('email')}

                />
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                {/* <div className="form-group">
                  <label htmlFor="accountPassword">
                    Current Password *
                  </label>
                  <input className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" required />
                </div> */}
                <Input
                    placeholder="Current Password *"
                    label=" Current Password *"
                    type='password'
                    {...register('password')}

                />
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                {/* <div className="form-group">
                  <label htmlFor="AccountNewPassword">
                    New Password *
                  </label>
                  <input className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" required />
                </div> */}
                <Input
                    placeholder=" New Password *"
                    label="New Password *"
                    type='password'
                    {...register('confirmPassword')}

                />
              </div>
              <div className="col-12 col-lg-6">
                {/* Birthday */}
                <div className="form-group">
                  {/* Label */}
                  <label>Date of Birth</label>
                  {/* Inputs */}
                  <div className="form-row">
                    <div className="col-auto">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountDate">
                        Date
                      </label>
                      <select className="custom-select custom-select-sm" id="accountDate">
                        <option>10</option>
                        <option>11</option>
                        <option selected>12</option>
                      </select>
                    </div>
                    <div className="col">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountMonth">
                        Month
                      </label>
                      <select className="custom-select custom-select-sm" id="accountMonth">
                        <option>January</option>
                        <option selected>February</option>
                        <option>March</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountYear">
                        Year
                      </label>
                      <select className="custom-select custom-select-sm" id="accountYear">
                        <option>1990</option>
                        <option selected>1991</option>
                        <option>1992</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/* Gender */}
                <div className="form-group mb-8">
                  <label>Gender</label>
                  <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-sm btn-outline-border active">
                      <input type="radio" name="gender" defaultChecked /> Male
                    </label>
                    <label className="btn btn-sm btn-outline-border">
                      <input type="radio" name="gender" /> Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <Button loading={loading} className="btn btn-dark" type="submit">Save Changes</Button>
              </div>
            </div>
          </form>
        </div>
  )
}
