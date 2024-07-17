import {
  Image,
  Button,
  Text,
  Link,
  Container,
  Icon,
  Search,
  IconButton,
} from '@/packages/mercado-libre';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div className={s.navLeftTop}>
          <Link>
            <Image src="/meli/logo.png" alt="mercado libre header logo" width={134} height={34} />
          </Link>
        </div>
        <div className={s.navLeftBottom}>
          {/* change this Link by Button with another variant/role */}
          <Button variant="ghost" role="tertiary" className={s.buttonLocation}>
            <span className={s.textLocation}>
              <Icon name="GoLocation" color="var(--font-color-black)" size={23} />
              <div className={s.textLocationWrapper}>
                <Text as="span" weight="normal" color="base" className={s.textLocation1}>
                  Ingresa tu
                </Text>
                <Text as="span" weight="normal" size="sm" className={s.textLocation2}>
                  ubicación
                </Text>
              </div>
            </span>
          </Button>
        </div>
        <div className={s.navCenterTop}>
          <Search className={s.search} placeholder="Buscar productos, marcas y más..." />
        </div>
        <div className={s.navCenterBottom}>
          <Button variant="ghost" role="tertiary" className={s.buttonCatergories}>
            <Text as="span" weight="normal">
              Categorías <Icon name="GoChevronDown" />
            </Text>
          </Button>
          <Link variant="secondary" size="sm">
            Ofertas
          </Link>
          <Link variant="secondary" size="sm">
            Historial
          </Link>
          <Link variant="secondary" size="sm" className={s.badge}>
            Supermercado
          </Link>
          <Link variant="secondary" size="sm">
            Moda
          </Link>
          <Link variant="secondary" size="sm">
            Vender
          </Link>
          <Link variant="secondary" size="sm">
            Ayuda / PQR
          </Link>
        </div>
        <div className={s.navRightTop}>
          <Image
            src="/meli/header-disneyplus.webp"
            alt="mercado libre header disney plus"
            width={340}
            height={39}
          />
        </div>
        <div className={s.navRightBottom}>
          <Link variant="secondary" size="sm">
            Crea tu cuenta
          </Link>
          <Link variant="secondary" size="sm">
            Ingresa
          </Link>
          <Link variant="secondary" size="sm">
            Mis Compras
          </Link>
          <IconButton
            icon="GoArchive"
            size={16}
            className={s.shoppingCar}
            color="var(--font-color-black)"
          />
        </div>
      </Container>
    </header>
  );
};

export { Header };
