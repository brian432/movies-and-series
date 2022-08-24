import React from "react"
const Trailers = ({ trailer }) => {
    return (
        <>
            <h3 className="trailer-title">{trailer.type}</h3>
            <div className="video-responsive">
                <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </>
    )
}
export default React.memo(Trailers)