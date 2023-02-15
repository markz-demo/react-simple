import classNames from "classnames";

export default function Container({ children, className, style, title }) {
    return (
        <div className={classNames("common-container", className)} style={style}>
            {title && <div className="common-container-title">{title}</div>}
            {children}
        </div>
    );
}