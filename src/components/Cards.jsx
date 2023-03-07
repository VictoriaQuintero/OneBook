function Card({ children }){
    let background = '';
    switch ((children.toLowerCase())) {
        case 'ciencias':
            background='bg-ciencias';
            break;
    
            case 'romance':
                background='bg-romance';
                break;
        
            case 'fantasia':
                background='bg-fantasia';
                break;
        
            case 'terror':
                background='bg-terror';
                break;
        
            case 'drama':
                background='bg-drama';
                break;
        
            case 'animados':
                background='bg-animados';
                break;
        
            default:
            break;
    }
    return(
        <div className={ background+" bg-cover w-3/4 h-52 border-marronClaro border-4 rounded-lg shadow-xl flex-auto lg:w-1/4" }>
            <div className="w-full h-full bg-amber-50 flex items-center justify-center transition-all duration-1000 hover:bg-transparent hover:first:text-transparent"><p className="font-chakra">{children}</p></div>
        </div>
    )
}

export default Card;