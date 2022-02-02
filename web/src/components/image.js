import React from "react";

const Image = (props) => {
    return (
        <article className="isotopeElement hover_Book bookShowWrap flt_65 flt_36 isotopeElementShow inited" style={{ opacity: 1, width: 240, height: 240, position: 'absolute', left: 0, top: 0 }}>
            <div className="">
                <div className="thumb">
                    <img alt="Maecenas tristique sem ante" src={props.url} />
                </div>
            </div>
        </article>
    )
}

export default Image