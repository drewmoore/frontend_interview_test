import React from 'react';

const AdvertisementItem = ({ banner, purpose, title, postalCode, city, price, numberOfRooms, space }) => (
  <article className="col-xs-12 col-lg-4 extra-padding" itemScope itemType="http://schema.org/Accommodation">
    <div className="advertisement-list-item">
      <div className="relative" itemProp="photo" itemScope itemType="http://schema.org/ImageObject">
        <img src={banner} className="advertisement-banner" alt="Wohnung Foto" itemProp="contentUrl" />
        <a href={banner} className="btn btn-default advertisement-link">{purpose}</a>
      </div>
      <div className="row extra-vertical-padding">
        <div className="col-xs-10 col-xs-offset-1">
          <h4 className="advertisement-heading" itemProp="description">{title}</h4>
          <address className="advertisement-location" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <span itemProp="postalCode">{postalCode} </span>
            <span itemProp="addressLocality">{city}</span>
          </address>
          <div className="row advertisement-footer extra-vertical-padding">
            <div className="col-xs-12 col-sm-4">
              <strong>{price}</strong>
            </div>
            <div className="col-xs-12 col-sm-8 text-right">
              <ul className="advertisement-extras list-unstyled list-inline">
                <li itemProp="numberOfRooms" itemScope itemType="http://schema.org/QuantitativeValue">
                  <span className="hidden" itemProp="unitText">ROM</span>
                  <span itemProp="value">{numberOfRooms}</span> Zimmer
                </li>
                <li itemProp="floorSize" itemScope itemType="http://schema.org/QuantitativeValue">
                  <span className="hidden" itemProp="unitCode">MTK</span>
                  ab <span itemProp="value">{space}</span> m<sup>2</sup>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default AdvertisementItem;
