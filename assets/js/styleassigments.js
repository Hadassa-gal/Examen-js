export const pending = `
.assigment_body{
    background: var(--filter-botones-fondo);
    border-left: 4px solid var(--tarjeta-locked-border);
    border-radius: 10px;
    box-shadow: 1px 1px 3px var(--tarjeta-shadow);
    margin-bottom: 1.5rem;
    transition: 2s;
    .status{
        padding: .5rem 1rem;
        font-size: .9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .assigment_header{
        padding: 1.5rem;
        border-bottom: 1px solid var(--tarjeta-division);
        .container_1_1{
            margin: 0 0 .5rem;
            font-size: 1.2rem;
            .title{
                margin: 0 0 0.5rem;
                line-height: 120%;
                font-weight: 500;
                color:var(--color-letras-titulos);
                font-size: 1.2rem;
            }
            .course_name{
                color: var(--azul-botones-border);
                font-weight: 500;
                font-size: .9rem;
            }
        }
        .container_date{
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: .9rem;
            margin-top: 1rem;
            .date{
                color: var(--tarjeta-locked-border);
            }
        }
    }
    .assigment_main{
        padding: 1.5rem;
        color: var(--filter-botones-letra);
        .course_content{
            line-height: 1.6;
            margin: 0 0 1rem;
        }
        .assigment_meta{
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            font-size: 0.9rem;
            .points .type .prerequisites{
                display: flex;
                align-items: center;
                gap: .5rem;
            }
        }
    }
    .assigment_footer{
        padding: 1rem 1.5rem;
        background: var(--icon-back);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 0px 0px 10px 10px;
        .footer_1{
            display: flex;
            align-items: center;
            gap: .5rem;
            color: var(--filter-botones-letra);
            font-size: .9rem;
        }
        .button{
            background: var(--azul-botones-border);
            color: var(--filter-botones-fondo);
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .button:hover{
            transform: translateY(-3px);
            background-color: var(--azul-botones-hover);
        }
    }
}
.assigment_body:hover{
    box-shadow: 2px 2px 5px var(--tarjeta-shadow);
    transition: ease-in 0.2s;
    transform: translateY(-5px);
}
`;
export const locked = `
.assigment_body_locked{
    opacity: 0.8;
    background: var(--filter-botones-fondo);
    border-left: 4px solid var(--tarjeta-locked-border);
    border-radius: 10px;
    box-shadow: 1px 1px 3px var(--tarjeta-shadow);
    margin-bottom: 1.5rem;
    transition: 2s;
    .status{
        padding: .5rem 1rem;
        font-size: .9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .assigment_header{
        padding: 1.5rem;
        border-bottom: 1px solid var(--tarjeta-division);
        .container_1_1{
            margin: 0 0 .5rem;
            font-size: 1.2rem;
            .title{
                margin: 0 0 0.5rem;
                line-height: 120%;
                font-weight: 500;
                color:var(--color-letras-titulos);
                font-size: 1.2rem;
            }
            .course_name{
                color: var(--azul-botones-border);
                font-weight: 500;
                font-size: .9rem;
            }
        }
        .container_date{
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: .9rem;
            margin-top: 1rem;
            .date{
                color: var(--tarjeta-locked-border);
            }
        }
    }
    .assigment_main{
        padding: 1.5rem;
        color: var(--filter-botones-letra);
        .course_content{
            line-height: 1.6;
            margin: 0 0 1rem;
        }
        .assigment_meta{
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            font-size: 0.9rem;
            .points .type .prerequisites{
                display: flex;
                align-items: center;
                gap: .5rem;
            }
        }
    }
    .assigment_footer{
        padding: 1rem 1.5rem;
        background: var(--icon-back);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 0px 0px 10px 10px;
        .footer_1{
            display: flex;
            align-items: center;
            gap: .5rem;
            color: var(--filter-botones-letra);
            font-size: .9rem;
        }
        .button_locked{
            background: var(--filter-botones-border);
            cursor: not-allowed;
            color: var(--filter-botones-fondo);
            border: none;
            padding: .75rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 500;
            transition: all .3s ease;
            display: flex;
            align-items: center;
            gap: .5rem;
            cursor: not-allowed;
        }
    }
}
.assigment_body_locked:hover{
    box-shadow: 2px 2px 5px var(--tarjeta-shadow);
    transition: ease-in 0.2s;
    transform: translateY(-5px);
}
`;
export const complited = `
.assigment_body_complited{
    background: var(--filter-botones-fondo);
    border-left: 4px solid var(--verde-barraprogreso);
    border-radius: 10px;
    box-shadow: 1px 1px 3px var(--tarjeta-shadow);
    margin-bottom: 1.5rem;
    transition: 2s;
    .status{
        padding: .5rem 1rem;
        font-size: .9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .assigment_header{
        padding: 1.5rem;
        border-bottom: 1px solid var(--tarjeta-division);
        .container_1_1{
            margin: 0 0 .5rem;
            font-size: 1.2rem;
            .title{
                margin: 0 0 0.5rem;
                line-height: 120%;
                font-weight: 500;
                color:var(--color-letras-titulos);
                font-size: 1.2rem;
            }
            .course_name{
                color: var(--azul-botones-border);
                font-weight: 500;
                font-size: .9rem;
            }
        }
        .container_date{
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: .9rem;
            margin-top: 1rem;
            .date{
                color: var(--tarjeta-locked-border);
            }
        }
    }
    .assigment_main{
        padding: 1.5rem;
        color: var(--filter-botones-letra);
        .course_content{
            line-height: 1.6;
            margin: 0 0 1rem;
        }
        .assigment_meta{
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            font-size: 0.9rem;
            .points .type .prerequisites{
                display: flex;
                align-items: center;
                gap: .5rem;
            }
        }
    }
    .assigment_footer{
        padding: 1rem 1.5rem;
        background: var(--icon-back);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 0px 0px 10px 10px;
        .button-complited{
            background: var(--filter-botones-border);
            cursor: not-allowed;
            color: var(--blanco-letrabotonoes);
            border: none;
            padding: .75rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 500;
            transition: all .3s ease;
            display: flex;
            align-items: center;
            gap: .5rem;
            cursor: not-allowed;
        }
    }
}
.assigment_body_complited:hover{
    box-shadow: 2px 2px 5px var(--tarjeta-shadow);
    transition: ease-in 0.2s;
    transform: translateY(-5px);
}
`;