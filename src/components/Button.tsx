import classNames from "classnames"

const Button = (props: any) => {


    const classes = classNames(
        props.className, 'flex items-center px-3 py-3 border',
        {
            'bg-[#4641dc] rounded-full': props.download
        }
    )


    return <button className={classes}>
        {props.children}
    </button>
}

export default Button