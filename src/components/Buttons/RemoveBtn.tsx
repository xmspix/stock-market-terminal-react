interface IRemoveBtn {
    cb: any
}

export default function RemoveBtn({ cb }: IRemoveBtn) {
    return <i className="btn fas fa-trash-alt" onClick={() => cb()}></i>
}