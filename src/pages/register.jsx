import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checkbox, Input, InputAdornment, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const schema = yup.object({
    name: yup.string().required("Digite sus nombre").min(2),
    lastName: yup.string().required("Digite sus apellidos"),
    passw: yup.string().required("Digite su contraseña"),
    passw2: yup.string().required("Digite su contraseña"),
});

const Register = () => {
    const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="container">
                <div className="py-5 text-center">
                    <h2>Registro</h2>
                    <p className="lead mt-3">
                        Para acceder a los productos ofrecidos por el Banco Caja Social, por
                        favor ingrese los siguientes datos:
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="nombres" className="form-label">
                                Nombres
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                className="form-control"
                            ></input>
                            <p className="text-danger">{errors.name?.message}</p>
                        </div>
                        <div className="col-sm-6">
                            <label for="appelidos" className="form-label">
                                Apellidos
                            </label>
                            <input
                                {...register("lastName")}
                                type="text"
                                className="form-control"
                            ></input>
                            <p className="text-danger">{errors.lastName?.message}</p>
                        </div>
                        <div className="col-12">
                            <label for="email" className="form-label">
                                Correo electronico
                            </label>
                            <div className="input-group">
                                <span className="input-group-text">@</span>
                                <input
                                    {...register("mail")}
                                    type="text"
                                    className="form-control"
                                    placeholder="correo@gmail.com"
                                ></input>
                                <p className="text-danger">{errors.mail?.message}</p>
                            </div>
                        </div>

                        <div className="col-6">
                            <label for="passw" className="form-label">
                                Contraseña
                            </label>
                            {/* <input {...register('passw')} type="password" className="form-control"></input> */}
                            <Input
                                {...register("passw")}
                                id="passw"
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                className="form-control"
                                onChange={handleChange("password")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            ></Input>
                            <p className="text-danger">{errors.passw?.message}</p>

                            {/* <label for="passw" className="form-label">Contraseña</label>
                            <div className="input-group">
                                <input {...register('passw')} type="password" className="form-control"></input>
                                <span className="input-group-text show-password fa fa-fw fa-eye" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                    </svg>
                                </span>
                                <p>{errors.passw?.messages}</p>
                            </div> */}
                        </div>

                        <div className="col-6">
                            <label for="passw2" className="form-label">
                                Confirmar contraseña
                            </label>
                            <input
                                {...register("passw2")}
                                type="password"
                                className="form-control"
                            ></input>
                            <p className="text-danger">{errors.passw2?.message}</p>
                        </div>

                        <div className="col-md-4">
                            <label for="typeId" className="form-label">
                                Tipo de documento
                            </label>
                            <select {...register("typeId")} className="form-select">
                                <option value="">Seleccione una opcion</option>
                                <option value="cc">Cedula</option>
                                <option value="pas">Pasaporte</option>
                                <option value="ce">Cedula de Estranjeria</option>
                            </select>
                            <p className="text-danger">{errors.typeId?.message}</p>
                        </div>

                        <div className="col-md-5">
                            <label for="id" className="form-label">
                                Numero de documento
                            </label>
                            <input
                                {...register("id")}
                                type="text"
                                className="form-control"
                            ></input>
                            <p className="text-danger">{errors.id?.message}</p>
                        </div>

                        <div className="col-md-3">
                            <label for="dateExp" className="form-label">
                                Fecha de expedición
                            </label>
                            <input
                                {...register("dateExp")}
                                type="date"
                                className="form-control"
                            ></input>
                            <p className="text-danger">{errors.dateExp?.message}</p>
                        </div>

                        <div className="col-6">
                            <label for="incomes" className="form-label">
                                Ingresos
                            </label>
                            <input
                                {...register("incomes")}
                                type="number"
                                className="form-control"
                            ></input>
                            <p className="text-danger">{errors.incomes?.message}</p>
                        </div>

                        <div className="col-6">
                            <label for="expenses" className="form-label">
                                Egresos
                            </label>
                            <input
                                {...register("expenses")}
                                type="number"
                                className="form-control"
                            ></input>
                            <p className="text-danger">{errors.expenses?.message}</p>
                        </div>
                    </div>
                    <div className="my-2 "></div>

                    <div className="form-check">
                        <Controller
                            name="Checkbox"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Checkbox
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    checked={field.value}
                                />
                            )}
                        />
                        <label className="form-check-label" for="save-info">
                            Acepta la politica de privacidad de datos
                        </label>
                    </div>

                    <button className="w-100 btn btn-primary btn-lg" type="submit">
                        Registrarse
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;
